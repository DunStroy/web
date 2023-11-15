import { ICommentPageProps } from "../pages/Comment/components/types";
import { IMyAdvertsPageProps } from "../pages/MyAdverts/components/types";
import { IMyCommentsPageProps } from "../pages/MyComments/components/MyCommentsPage/types";
import { IUser } from "../types/User";

export type RootStackParamList = {
  Main: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Auth: undefined;
  Register: undefined;
  User: IUser;
  UserSearch: undefined;
  MyComments: IMyCommentsPageProps;
  MyAdverts: IMyAdvertsPageProps;
  CommentsToMe: IMyCommentsPageProps;
  Comment: ICommentPageProps;
};
