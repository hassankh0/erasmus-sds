<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CoursStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules()
    {
        if (request()->isMethod('post')) {
            return [
                'name' => 'required|string|min:2|max:258',
                'code' => 'required|string|min:0|max:8',
                'description' => 'required|string|min:0|max:999',
                'credits' => 'required|integer',
                'instructor' => 'required|string|min:3|max:258'
            ];
        } else {
            return [
                'name' => 'required|string|min:2|max:258',
                'code' => 'required|string|min:0|max:8',
                'description' => 'required|string|min:0|max:999',
                'credits' => 'required|integer',
                'instructor' => 'required|string|min:3|max:258'
            ];
        }
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        if (request()->isMethod('post')) {
            return [
                'name.required' => 'Name is required!',
                'code.required'   => 'Code is required!',
                'credits.required'   => 'Credits number is required!',
                'description.required' => 'Description is required!',
                'instructor.required' => 'Instructor name is required!',
            ];
        } else {
            return [
                'name.required' => 'Name is required!',
                'code.required'   => 'Code is required!',
                'credits.required'   => 'Credits number is required!',
                'description.required' => 'Description is required!',
                'instructor.required' => 'Instructor name is required!',
            ];
        }
    }
}
