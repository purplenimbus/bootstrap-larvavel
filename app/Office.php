<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'offices';

    protected $fillable = [
	    'officeCode', 
	    'phone',
	    'addressLine1',
	    'addressLine2',
	    'city',
	    'state',
	    'postalCode',
	    'country',
	    'territory'
	]
}
