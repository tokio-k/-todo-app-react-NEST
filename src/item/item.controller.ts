import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import { ItemService } from './item.service';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { CreateItemDTO, UpdateItemDTO } from './item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  // `item`のURIへのGETメソッドでデータ全件取得．サービスの`findAll()`関数を実行．
  @Get()
  async getItemList(): Promise<Item[]> {
    return await this.service.findAll();
  }

  // `item`のURIへのPOSTメソッドでデータ新規登録．
  @Post()
  async addItem(@Body() item: CreateItemDTO): Promise<InsertResult> {
    console.log(item);
    return await this.service.create(item);
  }

  // `item/id番号/update`のURIにPUTメソッドで指定したデータの更新を実行．
  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() itemData: UpdateItemDTO,
  ): Promise<UpdateResult> {
    return await this.service.update(Number(id), itemData);
  }

  // パスワードなしで即削除する処理（動作確認用）
  @Delete(':id/delete')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.service.delete(Number(id));
  }
}
