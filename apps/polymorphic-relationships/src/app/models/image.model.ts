import {
  Column, CreatedAtColumn,
  forwardRef,
  Model,
  MorphToColumn,
  PrimaryGeneratedColumn,
  Table,
  UpdatedAtColumn
} from '@gradii/fedaco';
import { Post } from './post.model';
import { User } from './user.model';


@Table({
  tableName: 'images'
})
export class Image extends Model {
  _fillable = ['url'];

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @MorphToColumn({
    morphTypeMap: {
      'Post': forwardRef(() => Post),
      'User': forwardRef(() => User),
      'test_user': forwardRef(() => User),
      'test_post': forwardRef(() => Post),
    }
  })
  imageable: any;

  @UpdatedAtColumn()
  updated_at: Date;

  @CreatedAtColumn()
  created_at: Date;
}
