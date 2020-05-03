/*
 * Generated by orval v2.1.2 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';

export interface Pet {
  id: number;
  name: string;
  tag?: string;
}

export type Pets = Pet[];

export interface Error {
  code: number;
  message: string;
}

export type listPetsParams = { limit?: number };


export interface SwaggerPetstore {
  // List all pets
  listPets(
    params?: listPetsParams,
  ): AxiosPromise<Pets>;
  // Create a pet
  createPets(
    
  ): AxiosPromise<unknown>;
  // Info for a specific pet
  showPetById(
    petId: string,
    testId: string,
  ): AxiosPromise<Pet>;
}


export const getSwaggerPetstore = (axios: AxiosInstance): SwaggerPetstore => ({
  listPets(
    params?: listPetsParams,
  ): AxiosPromise<Pets> {
    return axios.get(
      `/pets`,
      {
        params,
      },
    );
  },
  createPets(
    
  ): AxiosPromise<unknown> {
    return axios.post(
      `/pets`,
      undefined,
    );
  },
  showPetById(
    petId: string,
    testId: string,
  ): AxiosPromise<Pet> {
    return axios.get(
      `/pets/${petId}/test/${testId}`,
    );
  },
});
