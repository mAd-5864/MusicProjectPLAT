import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicByGenrePage } from './music-by-genre.page';

describe('MusicByGenrePage', () => {
  let component: MusicByGenrePage;
  let fixture: ComponentFixture<MusicByGenrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicByGenrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicByGenrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
