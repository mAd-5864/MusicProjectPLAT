import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LyricPage } from './lyric.page';

describe('LyricPage', () => {
  let component: LyricPage;
  let fixture: ComponentFixture<LyricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LyricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
