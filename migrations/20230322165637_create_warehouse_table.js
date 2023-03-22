/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.createTable(("warehouses"), (table) => {
        table.uuid('id').primary();
        table.string('warehouse_name').notNullable();
        table.string('address').notNullable();
        table.string('city').notNullable();
        table.string('country').notNullable();
        table.string('contact_name').notNullable();
        table.string('contact_position').notNullable();
        table.string('contact_phone').notNullable();
        table.string('contact_email').notNullable();
        table.timestamps(true, true);
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('warehouses');
};

// return knex.schema.createTable(("warehouse") , (table) => {
//     //table.uuid("id", {primaryKey: true, useBinaryUuid: true}).defaultTo(knex.raw("uuid_generate_v4()"));
//     // table.uuid("id", {primaryKey: true, useBinaryUuid: true}).defaultTo(knex.raw("uuid_generate_v4()"));
//     // table.increments("id").primary().unique(); // primary key uuid?
//     // table.uuid('id').primary().unique().notNullable().defaultTo(knex.schema.raw('uuid_generate_v4()'));
//     table.uuid("id").primary();

//     table.string("warehouse_name").notNullable(); // name ex.  Washington
//     table.string("address").notNullable(); // i.e. 503 Broadway, New York, USA
//     table.string("city").notNullable(); // example?
//     table.string("country").notNullable(); // example?
//     table.string("contact_name").notNullable(); // Parmin Ajula
//     table.string("contact_position").notNullable().defaultTo("Employee")// example?
//     table.string("contact_phone", 15).notNullable(); // i.e. +1 (629) 555-0129
//     table.string("contact_email", 50).notNullable(); // name@instock.com
//     //table.timestamp('updated_at').defaultTo(knex.fn.now());
//     table.timestamp("updated_at").defaultTo(knex.fn.now());
//     table.timestamp("created_at").defaultTo(knex.fn.now()); // is this correct?
//   })






// // import { Knex } from "knex";

// // const { v4: uuidv4 } = require('uuid');
// const { 
//     v1: uuidv1,
//     v4: uuidv4,
//   } = require('uuid');
// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
    //   return knex.schema.createTable(("warehouse") , (table) => {
    //     //table.uuid("id", {primaryKey: true, useBinaryUuid: true}).defaultTo(knex.raw("uuid_generate_v4()"));
    //     // table.uuid("id", {primaryKey: true, useBinaryUuid: true}).defaultTo(knex.raw("uuid_generate_v4()"));
    //     // table.increments("id").primary().unique(); // primary key uuid?
    //     // table.uuid('id').primary().unique().notNullable().defaultTo(knex.schema.raw('uuid_generate_v4()'));
    //     table.uuid("id").primary();
    
    //     table.string("warehouse_name").notNullable(); // name ex.  Washington
    //     table.string("address").notNullable(); // i.e. 503 Broadway, New York, USA
    //     table.string("city").notNullable(); // example?
    //     table.string("country").notNullable(); // example?
    //     table.string("contact_name").notNullable(); // Parmin Ajula
    //     table.string("contact_position").notNullable().defaultTo("Employee")// example?
    //     table.string("contact_phone", 15).notNullable(); // i.e. +1 (629) 555-0129
    //     table.string("contact_email", 50).notNullable(); // name@instock.com
    //     //table.timestamp('updated_at').defaultTo(knex.fn.now());
    //     table.timestamp("updated_at").defaultTo(knex.fn.now());
    //     table.timestamp("created_at").defaultTo(knex.fn.now()); // is this correct?
    //   }).createTable("inventory", (table) => {
    //     // table.uuid("id", {primaryKey: true, useBinaryUuid: true}).defaultTo(knex.raw("uuid_generate_v4()"));
    //     // table.increments("id").primary().unique(); // primary key uuid?
    // //table.uuid(name, options=({[useBinaryUuid:boolean],[primaryKey:boolean]})
    
    //     table.uuid('id').primary().notNullable();
    //     // table.uuid("id").primary().unique();
    //     table.integer("warehouse_id").unsigned().notNullable(); // forein key
    //     table.string("item_name").notNullable(); // i.e. television
    //     table.string("category").notNullable(); // i.e. Electronics
    //     table.string("status").notNullable(); // out of stock
    //     table.integer("quantity").notNullable().defaultTo(0) // 0-n
    //     table.timestamp("created_at").defaultTo(knex.fn.now()); // is this correct?
    //     table.timestamp("updated_at").defaultTo(knex.fn.now());
    //     table.foreign("warehouse_id").references("id").inTable("warehouse").onUpdate("CASCADE").onDelete("CASCADE");
    // //     table
    // //         .integer('warehouse_id')
    // //         .unsigned()
    // //         .notNullable()
    // //         .references('id')
    // //         .inTable('warehouse')
    // //         .onUpdate('CASCADE')
    // //         .onDelete('CASCADE');
        
    //   })
    // };
    
    // /**
    //  * @param { import("knex").Knex } knex
    //  * @returns { Promise<void> }
    //  */
    // exports.down = function(knex) {
      //  return knex.schema.dropTable("post").dropTable("user");
    //   return knex.schema.dropTable("inventory").dropTable("warehouse");
    // };
    
