import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { Project } from './project.entity';

@Entity()
export class ProjectImage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  imageUrl!: string;

  @ManyToOne(
    () => Project,
    (project) => project.id,
    {
      onDelete: 'CASCADE',
    },
  )
  project!: Project;
}