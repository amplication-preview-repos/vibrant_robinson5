import { Module } from "@nestjs/common";
import { AyArticleConvertService } from "./ayarticleconvert.service";
import { AyArticleConvertController } from "./ayarticleconvert.controller";
import { AyArticleConvertResolver } from "./ayarticleconvert.resolver";

@Module({
  controllers: [AyArticleConvertController],
  providers: [AyArticleConvertService, AyArticleConvertResolver],
  exports: [AyArticleConvertService],
})
export class AyArticleConvertModule {}
