<?php

use Faker\Generator as Faker;

$factory->define(App\Company::class, function (Faker $faker) {
    return [
		'description' => $faker->text,
		'name' => $faker->company
    ];
});
