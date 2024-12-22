import { Injectable } from '@angular/core';

export interface Menu {
  path: string;
  name: string;
  type: string;
  icon: string;
  state?: 'open' | 'close';
  children?: Menu[];
}

const MENUITEMS: Menu[] = [
  { path: 'dashboard', name: '首頁', type: 'link', icon: 'av_timer' },
  {
    path: 'donate_management',
    name: '捐款管理',
    type: 'expansion',
    icon: 'blur_circular',
    state: 'close',
    children: [
      { path: 'donate_print', name: '捐款單據列印', type: 'link', icon: 'voicemail' },
      { path: 'credit_card', name: '信用卡捐款匯入', type: 'link', icon: 'crop_7_5' },
    ],
  },
  { path: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  { path: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  { path: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  { path: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  { path: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  {
    path: 'expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center',
  },
  { path: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  { path: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    path: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal',
  },
  {
    path: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular',
  },
  {
    path: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in',
  },
  { path: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { path: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { path: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    path: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive',
  },
];

@Injectable({
  providedIn: 'root',
})
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
