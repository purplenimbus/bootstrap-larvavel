<?php

use Illuminate\Database\Seeder;

class OtherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $job_status_types = [
        	[	'name' => 'archived' ],
			[	'name' => 'created'	],
			[	'name' => 'expired'	],
		];
		
		foreach($job_status_types as $status_type){
			App\JobStatus::create($status_type);
		}
    }
}
