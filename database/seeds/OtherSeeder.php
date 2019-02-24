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

        $job_types   =   ['Uncategorized','Full-Time','Part-Time','Contract','Freelance'];

        foreach($job_types as $type){
            App\JobType::create(['name' => $type]);
        }

        $company_categories    =   [   
            'Uncategorized','Basic Industries','Finance','Capital Goods','Healthcare','Consumer Durables',
            'Miscellaneous','Consumer','Non-Durables','Public Utilities','Consumer Services',
            'Technology','Energy','Transportation'
        ];

        foreach($company_categories as $category){
            App\CompanyCategory::create(['name' => $category]);
        }
    }
}
