/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiErrorResultClass } from '../models/ApiErrorResultClass';
import type { DeleteAllNftsResultClass } from '../models/DeleteAllNftsResultClass';
import type { DuplicateNftClass } from '../models/DuplicateNftClass';
import type { NFT } from '../models/NFT';
import type { NftDetailsClass } from '../models/NftDetailsClass';
import type { NftProjectsDetails } from '../models/NftProjectsDetails';
import type { UploadMetadataClass } from '../models/UploadMetadataClass';
import type { UploadNftClassV2 } from '../models/UploadNftClassV2';
import type { UploadNftResultClass } from '../models/UploadNftResultClass';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NftService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Blocks/Unblocks an nft  (nft uid)
   * You can block an nft, if it is not already sold or reserved and you can unblock blocked nfts
   * @returns any Returns the Nft Class
   * @throws ApiError
   */
  public getV2BlockUnblockNft({ nftuid, blockNft }: { nftuid: string; blockNft: boolean }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/BlockUnblockNft/{nftuid}/{blockNft}',
      path: {
        nftuid: nftuid,
        blockNft: blockNft,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
        406: `Not Acceptable`,
      },
    });
  }
  /**
   * Checks if the metadata is valid
   * @returns ApiErrorResultClass Returns OK if the metadata are valid
   * @throws ApiError
   */
  public getV2CheckMetadata({ nftuid }: { nftuid: string }): CancelablePromise<ApiErrorResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckMetadata/{nftuid}',
      path: {
        nftuid: nftuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The NFT was not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Checks if the metadata is valid
   * @returns ApiErrorResultClass Returns OK if the metadata are valid
   * @throws ApiError
   */
  public postV2CheckMetadata({
    nftuid,
    requestBody,
  }: {
    nftuid: string;
    requestBody?: UploadMetadataClass;
  }): CancelablePromise<ApiErrorResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CheckMetadata/{nftuid}',
      path: {
        nftuid: nftuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The NFT was not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Deletes all nfts from the database
   * This function deletes all NFTs from a project. You can delete a nft, if it is not in sold or reserved state. All other nfts will be deleted.
   * @returns DeleteAllNftsResultClass Returns the Nft Class
   * @throws ApiError
   */
  public getV2DeleteAllNftsFromProject({
    projectuid,
  }: {
    projectuid: string;
  }): CancelablePromise<DeleteAllNftsResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/DeleteAllNftsFromProject/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
        406: `Not Acceptable`,
      },
    });
  }
  /**
   * Deletes a nft from the database (nft uid)
   * You can delete a nft, if it is not in sold or reserved state
   * @returns any Returns the Nft Class
   * @throws ApiError
   */
  public getV2DeleteNft({ nftuid }: { nftuid: string }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/DeleteNft/{nftuid}',
      path: {
        nftuid: nftuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
        406: `Not Acceptable`,
      },
    });
  }
  /**
   * Duplicates a nft/token inside a project. If a token already exists, it will be skipped
   * @returns NftProjectsDetails Duplicate was successful. Returns the NtProjectDetails Class
   * @throws ApiError
   */
  public postV2DuplicateNft({
    nftuid,
    requestBody,
  }: {
    nftuid: string;
    requestBody?: DuplicateNftClass;
  }): CancelablePromise<NftProjectsDetails> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/DuplicateNft/{nftuid}',
      path: {
        nftuid: nftuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
        406: `The nft is not valid`,
      },
    });
  }
  /**
   * Returns detail information about one nft specified by Id (nft uid)
   * You will receive all information (fingerprint, ipfshash, etc.) about one nfts with the submitted id
   * @returns NftDetailsClass Returns the Nft Class
   * @throws ApiError
   */
  public getV2GetNftDetailsById({ nftuid }: { nftuid: string }): CancelablePromise<NftDetailsClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetNftDetailsById/{nftuid}',
      path: {
        nftuid: nftuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
      },
    });
  }
  /**
   * Returns detail information about one nft specified by its name
   * You will receive all information (fingerprint, ipfshash, etc.) about one nft with the submitted name
   * @returns NftDetailsClass Returns the Nft Class
   * @throws ApiError
   */
  public getV2GetNftDetailsByTokenname({
    projectuid,
    nftname,
  }: {
    projectuid: string;
    nftname: string;
  }): CancelablePromise<NftDetailsClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetNftDetailsByTokenname/{projectuid}/{nftname}',
      path: {
        projectuid: projectuid,
        nftname: nftname,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
      },
    });
  }
  /**
   * Returns detail information about nfts with a specific state with Pagination support. (project uid)
   * You will receive all information (fingerprint, ipfshash, etc.) about the nfts within a specific state.
   * State "all" lists all available nft in this project. The other states are: "free", "reserved", "sold" and "error"
   * @returns NFT Returns a List of the NFT Class
   * @throws ApiError
   */
  public getV2GetNfts({
    projectuid,
    state,
    count,
    page,
    orderby = 'id',
  }: {
    projectuid: string;
    state: string;
    count: number;
    page: number;
    /**
     * (Optional) The sort order of the result. Possible values are: id (default),id_desc (descending order), selldate (on sold nfts) and selldate_desc (descending order)
     */
    orderby?: string;
  }): CancelablePromise<Array<NFT>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetNfts/{projectuid}/{state}/{count}/{page}',
      path: {
        projectuid: projectuid,
        state: state,
        count: count,
        page: page,
      },
      query: {
        orderby: orderby,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
        406: `The projectuid was not found`,
      },
    });
  }
  /**
   * Updates the Metadata for one specific NFT
   * With this API you can update the Metadata Override for one specific NFT
   * If you leave the field blank, the Metadata override will be deleted and the Metadata from the project will be used.
   * @returns NftDetailsClass Returns the Nftdetails Class
   * @throws ApiError
   */
  public postV2UpdateMetadata({
    projectuid,
    nftuid,
    requestBody,
  }: {
    projectuid: string;
    nftuid: string;
    requestBody?: any;
  }): CancelablePromise<NftDetailsClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/UpdateMetadata/{projectuid}/{nftuid}',
      path: {
        projectuid: projectuid,
        nftuid: nftuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The NFT was not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Upload a File to a project and pin it to IPFS
   * With this API you can upload a file to IPFS and add it to a project. You can upload the file as BASE64 Content or as URL Link or as IPFS Hash.
   * If you submit Metadata, this Metadata will be used instead of the Metadatatemplate from the project. You can either submit Metadata or MetadataPlaceholder, but not both (because it makes no sense).
   * The Metadata field is optional and if you dont use it, it will use the Template from your project. It is poosible to mix both versions in one project. You can have one nft with own metadata and other nfts
   * with the template.
   * @returns UploadNftResultClass Returns the UploadNftResult Class
   * @throws ApiError
   */
  public postV2UploadNft({
    projectuid,
    uploadsource,
    requestBody,
  }: {
    projectuid: string;
    uploadsource?: string;
    requestBody?: UploadNftClassV2;
  }): CancelablePromise<UploadNftResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/UploadNft/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      query: {
        uploadsource: uploadsource,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `No Image Content was provided. Send a file either as Base64 or as Link or IPFS Hash`,
        406: `See the errormessage in the resultset for further information`,
        409: `There is a conflict with the provided images. Send a file either as Base64 or as Link or IPFS Hash`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
}
