/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateManagedWalletTransactionClass } from '../models/CreateManagedWalletTransactionClass';
import type { CreateWalletResultClass } from '../models/CreateWalletResultClass';
import type { ImportManagedWalletClass } from '../models/ImportManagedWalletClass';
import type { ImportWalletResultClass } from '../models/ImportWalletResultClass';
import type { MakeTransactionResultClass } from '../models/MakeTransactionResultClass';
import type { TxInAddressesClass } from '../models/TxInAddressesClass';
import type { Wallets } from '../models/Wallets';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ManagedWalletsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creates an Managed Wallet
   * @returns CreateWalletResultClass Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public getV2CreateWallet({
    customerid,
    walletpassword,
    enterpriseaddress,
    walletname = '',
  }: {
    customerid: number;
    walletpassword: string;
    enterpriseaddress: boolean;
    walletname?: string;
  }): CancelablePromise<CreateWalletResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CreateWallet/{customerid}/{walletpassword}/{enterpriseaddress}/{walletname}',
      path: {
        customerid: customerid,
        walletpassword: walletpassword,
        enterpriseaddress: enterpriseaddress,
        walletname: walletname,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Creates an Managed Wallet
   * @returns CreateWalletResultClass Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public getV2CreateWallet1({
    customerid,
    walletpassword,
    enterpriseaddress,
  }: {
    customerid: number;
    walletpassword: string;
    enterpriseaddress: boolean;
  }): CancelablePromise<CreateWalletResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CreateWallet/{customerid}/{walletpassword}/{enterpriseaddress}',
      path: {
        customerid: customerid,
        walletpassword: walletpassword,
        enterpriseaddress: enterpriseaddress,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Returns the utxo of an Managed Wallet
   * @returns TxInAddressesClass Returns the TxInAddressesClass Class
   * @throws ApiError
   */
  public getV2GetWalletUtxo({ address }: { address: string }): CancelablePromise<TxInAddressesClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetWalletUtxo/{address}',
      path: {
        address: address,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Imports an Wallet
   * @returns ImportWalletResultClass Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public postV2ImportWallet({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: ImportManagedWalletClass;
  }): CancelablePromise<ImportWalletResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/ImportWallet/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Returns the utxo of an Managed Wallet
   * @returns Wallets Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public getV2ListAllWallets({ customerid }: { customerid: number }): CancelablePromise<Array<Wallets>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/ListAllWallets/{customerid}',
      path: {
        customerid: customerid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Makes a transaction on a managed Wallet
   * @returns MakeTransactionResultClass Returns the MakeTransactionResult Class
   * @throws ApiError
   */
  public postV2MakeTransaction({
    customerid,
    senderaddress,
    walletpassword,
    requestBody,
  }: {
    customerid: number;
    senderaddress: string;
    walletpassword: string;
    requestBody?: CreateManagedWalletTransactionClass;
  }): CancelablePromise<MakeTransactionResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/MakeTransaction/{customerid}/{senderaddress}/{walletpassword}',
      path: {
        customerid: customerid,
        senderaddress: senderaddress,
        walletpassword: walletpassword,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
}
