# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161130093426) do

  create_table "contacts", primary_key: "ID", force: :cascade do |t|
    t.string "Name",     limit: 255, null: false
    t.string "Email",    limit: 255, null: false
    t.string "Add_1",    limit: 50
    t.string "Add_2",    limit: 50
    t.string "Town",     limit: 50
    t.string "Postcode", limit: 10
    t.string "Phone",    limit: 25
    t.date   "DOB"
  end

  create_table "django_content_type", force: :cascade do |t|
    t.string "name",      limit: 100, null: false
    t.string "app_label", limit: 100, null: false
    t.string "model",     limit: 100, null: false
  end

  add_index "django_content_type", ["app_label", "model"], name: "django_content_type_app_label_76bd3d3b_uniq", unique: true, using: :btree

  create_table "django_migrations", force: :cascade do |t|
    t.string   "app",     limit: 255,               null: false
    t.string   "name",    limit: 255,               null: false
    t.datetime "applied",             precision: 6, null: false
  end

end
