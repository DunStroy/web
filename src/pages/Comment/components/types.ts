import { IComment } from "../../../types/Comment";
import { IUser } from "../../../types/User";

export interface ICommentPageProps  {
  username: string,
  userId: string,
  defaultComment?: IComment,
}