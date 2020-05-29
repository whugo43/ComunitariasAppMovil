import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GruposDeApolloRegistroPage } from './grupos-de-apollo-registro.page';

describe('GruposDeApolloRegistroPage', () => {
  let component: GruposDeApolloRegistroPage;
  let fixture: ComponentFixture<GruposDeApolloRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposDeApolloRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GruposDeApolloRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
