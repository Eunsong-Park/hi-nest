
import { PartialType } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// 다음 방법 대신 PartialType을 사용
// export class UpdateMovieDto {
  
//   @IsString()
//     readonly title?: string;
//   @IsNumber()
//     readonly year?: number;
//   @IsString({ each: true })  
//     readonly genres?: string[];
// }