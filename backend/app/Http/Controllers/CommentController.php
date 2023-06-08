<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comments = Comment::all();

        return response()->json($comments);
    }

    public function indexReported()
    {
        $reportedComments = Comment::where('isReported', true)->get();

        return response()->json($reportedComments);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // You can return a view here to show the create comment form
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Create Comment
            $comment = Comment::create($request->all());

            // Return Json Response
            return response()->json([
                'message' => "Comment successfully created.",
                'comment' => $comment
            ], 201);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        return response()->json($comment);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        // You can return a view here to show the edit comment form
    }

    /**
     * Update the specified resource in storage.
     */

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();

        return response()->json(['message' => 'Comment deleted successfully']);
    }
    public function markAsUnreported(Comment $comment)
    {
        $comment->isReported = false;
        $comment->save();

        return response()->json(['message' => 'Comment marked as unreported']);
    }
    public function markAsreported(Comment $comment)
    {
        $comment->isReported = true;
        $comment->save();

        return response()->json(['message' => 'Comment marked as reported']);
    }
}
