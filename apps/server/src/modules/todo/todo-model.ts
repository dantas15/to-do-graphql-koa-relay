import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';

const Schema = new mongoose.Schema<ITodo>(
  {
    title: {
      type: String,
      description: 'The title of the to-do',
    },
    description: {
      type: String,
      description: 'The extended description of the to-do',
    },
    dueDate: {
      type: Date,
      description: 'The date when the to-do is due',
    },
    attachments: {
      type: [
        {
          fileName: String,
          fileUrl: String,
        },
      ],
      description: 'Uploaded files attached to the to-do',
    },
    doneAt: {
      type: Date,
      description:
        'The date the to-do was marked as complete. Also is responsible for controlling the state',
    },
    deletedAt: {
      type: Date,
      description:
        'Controls the delete state of the to-do, enables the user to recover the to-do',
    },
  },
  {
    collection: 'Todo',
    timestamps: true,
  }
);

export type ITodo = {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
  attachments?: IAttachment[];
  doneAt?: Date;
  deletedAt?: Date;
} & Document;

export type IAttachment = {
  fileName: string;
  fileUrl: string;
};

export const Todo: Model<ITodo> = mongoose.model('Todo', Schema);
