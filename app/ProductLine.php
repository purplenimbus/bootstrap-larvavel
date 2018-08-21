<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductLine extends Model
{
	/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'productlines';

    protected $fillable = [
		'productLine', 
	    'textDescription', 
	    'htmlDescription',
	    'image'
	];
}
