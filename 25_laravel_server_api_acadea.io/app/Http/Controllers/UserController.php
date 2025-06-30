<?php

namespace App\Http\Controllers;

use App\Base\Controller;
use App\Exceptions\GeneralJsonException;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 * @group User Management
 *
 * API for managing users of the system
 */
class UserController extends Controller
{
    /**
     * Display a listing of the user.
     *
     * Get a list of user
     *
     * @queryParam page_size int Size per page Example: 5
     * @queryParam page int Page to view Example: 1
     *
     * @x_apiResourceCollection App\Http\Resources\UserResource
     * @x_ apiResourceModel App\Models\User
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        $pageSize = $request->page_size ?? 20;
        $users = User::query()->paginate($pageSize);
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @bodyParam name string required Name of the user Example: shihab
     * @bodyParam email string required Email of the user Example: shihab@gmail.com
     * @bodyParam password string required password of the user Example: 123423
     *
     * @throws GeneralJsonException
     */
    public function store(StoreUserRequest $request): JsonResponse
    {
        $user = UserRepository::create($request->only(["name", "email", "password"]));

        return new JsonResponse($user);
    }

    /**
     * Display the specified user.
     *
     * @urlParam id int required User ID Example: 1
     */
    public function show(User $user): JsonResponse
    {
        return new JsonResponse($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(): JsonResponse
    {
        return new JsonResponse(["data" => "updated"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(): JsonResponse
    {
        return new JsonResponse(["data" => "deleted"]);

    }
}
