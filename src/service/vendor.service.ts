import { Injectable, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { ListQueryBuilder,getEntityOrThrow,AssetService } from '@vendure/core';

import { ListQueryOptions } from '@vendure/core/dist/common/types/common-types';

import { VendorEntity } from '../entities/vendor.entity';
import { PLUGIN_INIT_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

@Injectable()
export class VendorService {

    constructor(@InjectConnection() private connection: Connection,
                @Inject(PLUGIN_INIT_OPTIONS) private options: PluginInitOptions,
				private listQueryBuilder: ListQueryBuilder,
				private assetService: AssetService) {}

    async getAllVendors(ctx,options?: ListQueryOptions<VendorEntity>) {
        return this.listQueryBuilder
		.build(VendorEntity, options)
		.getManyAndCount()
		.then(([vendors, totalItems]) => {
			return {
				items: vendors,
				totalItems
			 };
		 });
    }
	
	async getVendorById(ctx,data){
	   return getEntityOrThrow(this.connection, VendorEntity, data);
	}
	
	async addSingleVendor(ctx,data){
	   if(data.file){
	     const asset = await this.assetService.create(ctx, data);
	     data.assetid = asset.id;
	     data.assetsource = asset.source;
	     delete data.file;
	   }else{
	     data.assetid="";
		 data.assetsource="";
	   }
	   const createdVariant = this.connection.getRepository(VendorEntity).create(data);
	   const savedVariant = await this.connection.getRepository(VendorEntity).save(createdVariant);
	   return savedVariant;
	}
	
	async updateSingleVendor(ctx,data){
	   let details:any;
	   if(data.file){
	     const asset = await this.assetService.create(ctx, data);
	     data.assetid = asset.id;
	     data.assetsource = asset.source;
	     delete data.file;
		 details ={
		   firstname:data.firstname,
	       lastname:data.lastname,
	       email:data.email,
	       phone:data.phone,
	       companyname:data.companyname,
	       companyaddr:data.companyaddr,
	       companydesc:data.companydesc||"",
	       companyphone:data.companyphone,
	       companycategory:data.companycategory,
	       panvat:data.panvat,
	       panvatnum:data.panvatnum,
	       producttype:data.producttype,
		   assetid:data.assetid,
		   assetsource:data.assetsource
		 }
	   }else{
	      details ={
		   firstname:data.firstname,
	       lastname:data.lastname,
	       email:data.email,
	       phone:data.phone,
	       companyname:data.companyname,
	       companyaddr:data.companyaddr,
	       companydesc:data.companydesc||"",
	       companyphone:data.companyphone,
	       companycategory:data.companycategory,
	       panvat:data.panvat,
	       panvatnum:data.panvatnum,
	       producttype:data.producttype
		 }
	   }
	   const createdVariant = await this.connection.getRepository(VendorEntity).update(data.id,details);
	   return getEntityOrThrow(this.connection, VendorEntity, data.id);
	}
	
	async deleteSingleVendor(ctx,ids){
	   const Variants = await getEntityOrThrow(this.connection, VendorEntity, ids);
	   this.connection.getRepository(VendorEntity).delete(ids);
	   return Variants;
	}
	
	deleteAllVendors(ctx){
	   this.connection.getRepository(VendorEntity).clear();
	   return true;
	}
	
}
