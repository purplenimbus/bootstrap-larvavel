<?php

use Illuminate\Database\Seeder;

class JobCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $job_categories = [	'Uncategorized','Accounting','General Business',
			'Other','Admin & Clerical',
			'General Labor','Pharmaceutical',
			'Automotive','Government',
			'Professional Services',
			'Banking','Grocery',
			'Purchasing','Procurement',
			'Biotech', 'Health Care',
			'QA - Quality Control',
			'Broadcast','Journalism',
			'Hotel','Hospitality',
			'Real Estate','Business Developmeny',
			'Human Resources','Research',
			'Construction','Information Technology',
			'Restaurant','Food Service',
			'Consultant','Installation',
			'Maint','Repair','Retail',
			'Customer Service','Insurance',
			'Sales','Design',
			'Inventory','Science',
			'Distribution','Shipping',
			'Legal','Skilled Labor',
			'Trades','Education',
			'Teaching','Legal Admin',
			'Strategy','Planning',
			'Engineering','Management',	
			'Supply Chain','Entry Level',
			'New Grad','Manufacturing',	
			'Telecommunications','Executive',
			'Marketing','Training',
			'Facilities','Media ',
			'Journalism','Newspaper',
			'Transportation','Finance',
			'Nonprofit','Social Services',	
			'Warehouse','Franchise','Nursing',
		];

		foreach($job_categories as $category){
			App\JobCategory::create(['name' => $category]);
		}
    }
}
