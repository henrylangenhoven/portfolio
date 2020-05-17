import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';

@NgModule({
  declarations: [PortfolioComponent, PortfolioModalComponent],
  exports: [PortfolioComponent, PortfolioModalComponent],
  imports: [CommonModule],
})
export class PortfolioModule {}
