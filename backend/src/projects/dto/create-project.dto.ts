export class CreateProjectDto {
  title!: string;
  slug!: string;
  location!: string;
  category!: string;
  status!: string;
  description!: string;
  coverImage?: string;
  completionYear?: string;
}