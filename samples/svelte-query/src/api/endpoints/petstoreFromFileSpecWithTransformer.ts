/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryStoreResult,
  QueryKey
} from '@sveltestack/svelte-query'
import type {
  Pets,
  Error,
  ListPetsParams,
  CreatePetsBody,
  Pet
} from '../model'
import { customInstance } from '../mutator/custom-instance'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


/**
 * @summary List all pets
 */
export const listPets = (
    params?: ListPetsParams,
    version= 1,
 signal?: AbortSignal
) => {
      return customInstance<Pets>(
      {url: `/v${version}/pets`, method: 'get', signal,
        params,
    },
      );
    }
  

export const getListPetsQueryKey = (params?: ListPetsParams,
    version= 1,) => [`/v${version}/pets`, ...(params ? [params]: [])];

    
export type ListPetsQueryResult = NonNullable<AsyncReturnType<typeof listPets>>
export type ListPetsQueryError = Error

export const useListPets = <TData = AsyncReturnType<typeof listPets>, TError = Error>(
 params?: ListPetsParams,
    version= 1, options?: { query?:UseQueryOptions<AsyncReturnType<typeof listPets>, TError, TData>, }

  ): UseQueryStoreResult<AsyncReturnType<typeof listPets>, TError, TData, QueryKey> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params,version);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof listPets>> = ({ signal }) => listPets(params,version, signal);

  const query = useQuery<AsyncReturnType<typeof listPets>, TError, TData>(queryKey, queryFn, {enabled: !!(version), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}


/**
 * @summary Create a pet
 */
export const createPets = (
    createPetsBody: CreatePetsBody,
    version= 1,
 
) => {
      return customInstance<void>(
      {url: `/v${version}/pets`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: createPetsBody
    },
      );
    }
  


    export type CreatePetsMutationResult = NonNullable<AsyncReturnType<typeof createPets>>
    export type CreatePetsMutationBody = CreatePetsBody
    export type CreatePetsMutationError = Error

    export const useCreatePets = <TError = Error,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof createPets>, TError,{data: CreatePetsBody;version?: number}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof createPets>, {data: CreatePetsBody;version?: number}> = (props) => {
          const {data,version} = props ?? {};

          return  createPets(data,version,)
        }

      return useMutation<AsyncReturnType<typeof createPets>, TError, {data: CreatePetsBody;version?: number}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * @summary Info for a specific pet
 */
export const showPetById = (
    petId: string,
    version= 1,
 signal?: AbortSignal
) => {
      return customInstance<Pet>(
      {url: `/v${version}/pets/${petId}`, method: 'get', signal
    },
      );
    }
  

export const getShowPetByIdQueryKey = (petId: string,
    version= 1,) => [`/v${version}/pets/${petId}`];

    
export type ShowPetByIdQueryResult = NonNullable<AsyncReturnType<typeof showPetById>>
export type ShowPetByIdQueryError = Error

export const useShowPetById = <TData = AsyncReturnType<typeof showPetById>, TError = Error>(
 petId: string,
    version= 1, options?: { query?:UseQueryOptions<AsyncReturnType<typeof showPetById>, TError, TData>, }

  ): UseQueryStoreResult<AsyncReturnType<typeof showPetById>, TError, TData, QueryKey> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId,version);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof showPetById>> = ({ signal }) => showPetById(petId,version, signal);

  const query = useQuery<AsyncReturnType<typeof showPetById>, TError, TData>(queryKey, queryFn, {enabled: !!(version && petId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}


