import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private readonly menuRepository: Repository<Menu>,
  ) {}

  createMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu: Menu = new Menu();
    menu.name = createMenuDto.name;
    menu.category_id = createMenuDto.category_id;
    menu.price = createMenuDto.price;
    menu.remaining = createMenuDto.remaining;
    menu.key = createMenuDto.key;

    return this.menuRepository.save(menu);
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find({
      order: { id: 'ASC' },
      relations: { category: true },
    });
  }

  findById(id: number): Promise<Menu> {
    return this.menuRepository.findOneBy({ id });
  }

  update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const menu: Menu = new Menu();
    menu.name = updateMenuDto.name;
    menu.category_id = updateMenuDto.category_id;
    menu.price = updateMenuDto.price;
    menu.remaining = updateMenuDto.remaining;
    menu.id = id;
    return this.menuRepository.save(menu);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.menuRepository.delete(id);
  }
}
