import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScopePagePage } from './scope-page.page';

describe('ScopePagePage', () => {
  let component: ScopePagePage;
  let fixture: ComponentFixture<ScopePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScopePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
