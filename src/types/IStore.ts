import { IFile } from "./IFile";
import { IPage } from "./IPagination";

/**
 * A generic storage interface that abstracts the underlying storage mechanism.
 * The storage could be a database (e.g., Redis, Postgres) or a temporary in-memory store.
 * It provides methods to retrieve, insert, and remove files.
 */
export interface IStore {
  /**
   * Retrieves the list of stored files.
   *
   * The files could be either:
   * - A string representing an IRI (Internationalized Resource Identifier), which could be a file URL.
   * - An ArrayBuffer, representing a file's binary content.
   *
   * @returns A promise resolving to an array of stored files.
   */
  index: (paginationInfo?: IPage.IRequest) => Promise<IPage<IFile>>;

  /**
   * Get File by ID
   *
   * @param id Unique ID of File
   * @returns File as ArrayBuffer or iri
   */
  at: (id: string) => Promise<IFile>;

  /**
   * Inserts files into the store.
   *
   * The storage backend could be a database like Redis or Postgres, or even an in-memory store.
   * Implementations may vary based on the storage type.
   *
   * @param files Files to be inserted into the store.
   * @returns A promise resolving to `true` if insertion succeeds, otherwise `false`.
   */
  insert?: (files: IFile[]) => Promise<boolean>;

  /**
   * Removes specified files from the store.
   *
   * The storage backend could be a database like Redis or Postgres, or an in-memory store.
   * Implementations should ensure that only the specified files are removed.
   *
   * @param files Files to be removed from the store.
   * @returns A promise resolving to `true` if removal succeeds, otherwise `false`.
   */
  remove?: (files: IFile[]) => Promise<boolean>;
}
