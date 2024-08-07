import * as graphql from "@nestjs/graphql";
import { AyArticleConvertService } from "./ayarticleconvert.service";

export class AyArticleConvertResolver {
  constructor(protected readonly service: AyArticleConvertService) {}
}
