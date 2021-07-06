/**
 * Foreign key from the database stored in this class.
 */
export interface TableForeignKey {
  /**
   * Name of the foreign key constraint.
   */
  name?: string

  /**
   * Column names which included by this foreign key.
   */
  columnNames: string[]

  /**
   * Table referenced in the foreign key.
   */
  referencedTableName: string

  /**
   * Column names which included by this foreign key.
   */
  referencedColumnNames: string[]

  /**
   * "ON DELETE" of this foreign key, e.g. what action database should perform when
   * referenced stuff is being deleted.
   */
  onDelete?: string

  /**
   * "ON UPDATE" of this foreign key, e.g. what action database should perform when
   * referenced stuff is being updated.
   */
  onUpdate?: string

  /**
   * Set this foreign key constraint as "DEFERRABLE" e.g. check constraints at start
   * or at the end of a transaction
   */
  deferrable?: string
}