//climate types
export interface ISituation {
	current: {
		EpochTime: number;
		WeatherIcon: number;
		Temperature: ITemperature;
	};
}
export interface ITemperature {
	Metric: IMetric;
}
export interface IMetric {
	Value: number;
}

//nav props
export interface IdProps {
	id?: number;
	ip?: number;
}

export interface NavProps {
	nav: {
		id: number;
		categorie_name: string;
	}[];
}
