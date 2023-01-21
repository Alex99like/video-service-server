import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from "../user/user.entity";
import { Base } from "../utils/Base";
import { VideoEntity } from "../video/video.entity";

@Entity('Video')
export class CommentEntity extends Base {
  @Column({ type: 'text' })
  message: string

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user: UserEntity

  @ManyToOne(() => VideoEntity, video => video.comments)
  @JoinColumn({name: 'video_id'})
  video: VideoEntity
}