import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//�������������Ҫ��һ��
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app/app.component';
@NgModule({
	imports:      [
		BrowserModule,
		FormsModule
	],//[����]ģ�飬����������ǰģ������ġ��زġ�������ÿ��Ӧ�õ� ��ģ�� ��Ҫ���� BrowserModule ģ��
	declarations: [ AppComponent ],//�����ڵ�ǰģ��������ָ��
	bootstrap:    [ AppComponent ]//��ǳ�[�����]��������Ӧ��ʱ��Angular Ӧ��ͨ��������������
})
export class AppModule { }
