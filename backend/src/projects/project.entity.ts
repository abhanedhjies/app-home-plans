import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { ProjectImage } from './project-image.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  slug!: string;

  @Column()
  location!: string;

  @Column()
  category!: string;

  @Column()
  status!: string;

  @Column('text')
  description!: string;

  @Column({ nullable: true })
  coverImage?: string;

  @Column({ nullable: true })
  completionYear?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(
  () => ProjectImage,
  (image) => image.project,
)
images!: ProjectImage[];
}