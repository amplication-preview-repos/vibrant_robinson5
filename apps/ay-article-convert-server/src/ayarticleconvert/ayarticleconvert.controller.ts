import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AyArticleConvertService } from "./ayarticleconvert.service";

@swagger.ApiTags("ayArticleConverts")
@common.Controller("ayArticleConverts")
export class AyArticleConvertController {
  constructor(protected readonly service: AyArticleConvertService) {}
}
