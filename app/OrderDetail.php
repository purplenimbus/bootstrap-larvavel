<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'orderdetails';

    protected $fillable = [
	    'orderNumber', 
	    'productCode',
	    'quantityOrdered',
	    'priceEach',
	    'orderLineNumber'
	];

    function product(){
        return $this->belongsTo('App\Product','productCode','productCode');
    }
}
