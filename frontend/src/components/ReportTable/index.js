import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import { getComments, markCommentAsUnreported, deleteComment, getCommentsReported } from '../../services/commentServices';
import "./index.css";

export default function TableReport() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    // Fetch comments from the API
    getCommentsReported()
      .then(data => {
        setComments(data);
        setFilteredComments(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUnreport = (commentId) => {
    // Call API to mark comment as unreported
    markCommentAsUnreported(commentId)
      .then(response => {
        // Update the filteredComments state to reflect the changes
        setFilteredComments(prevState => prevState.map(comment => {
          if (comment.id === commentId) {
            return { ...comment, isReported: false };
          }
          return comment;
        }));
        fetchComments(); // Re-fetch comments to update the table
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (commentId) => {
    // Call API to delete comment
    deleteComment(commentId)
      .then(response => {
        // Update the filteredComments state to remove the deleted comment
        setFilteredComments(prevState => prevState.filter(comment => comment.id !== commentId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Reports</h1>
      <div style={{ textAlign: 'right' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Comment</TableCell>
              <TableCell>Unreport</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredComments.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell>{comment.content}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleUnreport(comment.id)}
                  >
                    Unreport
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(comment.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
