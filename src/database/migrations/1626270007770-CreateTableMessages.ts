import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableMessages1626270007770 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Tbl_Messages",
            columns: [
                {
                    name: "_id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "message",
                    type: "varchar",
                },
                {
                    name: "_id_send",
                    type: "varchar"
                },
                {
                    name: "_id_recived",
                    type: "varchar"
                }
            ]
        }))

        await queryRunner.createForeignKeys("Tbl_Messages", [
            new TableForeignKey({
                columnNames: ["_id_send"],
                referencedColumnNames: ["_id"],
                referencedTableName: "Tbl_Users"
            }),
            new TableForeignKey({
                columnNames: ["_id_recived"],
                referencedColumnNames: ["_id"],
                referencedTableName: "Tbl_Users"
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const TableMessages = await queryRunner.getTable("Tbl_Messages");
        const ForeingKeys = TableMessages.foreignKeys;

        await queryRunner.dropForeignKeys("Tbl_Messages", ForeingKeys);

        await queryRunner.dropTable("Tbl_Messages");
    }

}
