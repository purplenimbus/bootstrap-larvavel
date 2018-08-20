<?php

use Illuminate\Database\Seeder;

class SqlDumpSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sql = base_path('mysqlsampledatabase.sql');

		//collect contents and pass to DB::unprepared
		DB::unprepared(file_get_contents($sql));
    }
}
