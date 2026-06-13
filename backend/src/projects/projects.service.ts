import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(
      createProjectDto,
    );

    return this.projectRepository.save(project);
  }

  async findAll() {
    return this.projectRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    return this.projectRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.projectRepository.delete(id);
  }
}