import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableFriends1626268637476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Tbl_Friends",
            columns: [
                {
                    name: "_id_User",
                    type: "varchar"
                },
                {
                    name: "_id_Friend",
                    type: "varchar"
                }
            ]
        }))
        await queryRunner.createForeignKey("Tbl_Friends", new TableForeignKey({
            columnNames: ["_id_User"],
            referencedColumnNames: ["_id"],
            referencedTableName: "Tbl_Users"
        }))

        await queryRunner.createForeignKey("Tbl_Friends", new TableForeignKey({
            columnNames: ["_id_Friend"],
            referencedColumnNames: ["_id"],
            referencedTableName: "Tbl_Users"
        }))

        await queryRunner.createPrimaryKey("Tbl_Friends", ["_id_User", "_id_Friend"]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const TableFriends = await queryRunner.getTable("Tbl_Friends");
        const ForeignKeyUser = TableFriends.foreignKeys.find(fk => fk.columnNames.indexOf("_id_User") !== -1) ;
        const ForeignKeysFriend = await TableFriends.foreignKeys.find(fk => fk.columnNames.indexOf("_id_Friend") !== -1);

        await queryRunner.dropForeignKeys("Tbl_Users", [ForeignKeyUser, ForeignKeysFriend]);
        await queryRunner.dropTable("Tbl_Friends");
    }
}
