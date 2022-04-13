import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RatingService} from '../../services/rating.service';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
    ratingForm: FormGroup;
    constructor(private ratingService: RatingService) { }

    ngOnInit() {
        this.ratingForm = new FormGroup({
            'overall_satisfaction': new FormControl(null, [Validators.required, Validators.email]),
            'review': new FormControl(null, Validators.required),
            'communication': new FormControl(null, Validators.required),
            'quality_of_work': new FormControl(null, Validators.required),
            'value_for_money': new FormControl(null, Validators.required)
        });
    }

    public async onSubmit() {

            let obj = {
                "project_id": 1,
                "overall_satisfaction": this.ratingForm.get('overall_satisfaction').value,
                "comment": this.ratingForm.get('review').value,
                "details": {
                    "communication": this.ratingForm.get('communication').value,
                    "quality_of_work": this.ratingForm.get('quality_of_work').value,
                    "value_for_money": this.ratingForm.get('value_for_money').value,
                },
            };

        let res = await this.ratingService.rateProject(obj)

        if(res.value == true)
            alert('Thanks for your rating, We promise you with extra features in the near future!')
        else
            alert(res.msg)
    }
}