"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class createImages1602699727838 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "images",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "path",
                    type: "varchar",
                },
                {
                    name: "orphanage_id",
                    type: "integer",
                },
            ],
            foreignKeys: [
                {
                    name: "ImageOrphanage",
                    columnNames: ["orphanage_id"],
                    referencedTableName: "orphanages",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("images");
    }
}
exports.default = createImages1602699727838;
