<?php

use Illuminate\Database\Seeder;

class DummyDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $companies = factory(App\Company::class, 2)->create()->each(function ($company) {
	        $jobs = factory(App\Job::class, 5)->create([
	        	"author_id" => 1,
	        	"company_id" => $company->id
	        ]);
	    });
    }
}
