<?php


namespace App\Service;

class ElectionService
{
    public function getPluralLabel(string $singular, string $locale): string
    {


        $map = [
            'fr' => [
                'une élection legislative' => 'élections législatives',
                'élection européenne' => 'élections européennes',
                'élection provinciale' => 'élections provinciales',
                'élection sénatoriale' => 'élections sénatoriales',
                'élection régionale (Wallonie)' => 'élections régionales (Wallonie)',
                'élection régionale (Flandre)' => 'élections régionales (Flandre)',
                'élection régionale (Communauté germanophone)' => 'élections régionales (Communauté germanophone)',
            ],
            'en' => [
                'federal election' => 'federal elections',
                'European election' => 'european elections',
                'provincial election' => 'provincial elections',
                'senatorial election' => 'senatorial elections',
                'a regional election (Wallonia)' => 'regional elections',
            ],
            'nl' => [
                'een federale verkiezing' => 'federale verkiezingen',
                'Europese verkiezing' => 'Europese verkiezingen',
                'provinciale verkiezing' => 'provinciale verkiezingen',
                'senaatsverkiezing' => 'senaatsverkiezingen',
                'een regionale verkiezing' => 'regionale verkiezingen',
            ],
        ];

        $key = mb_strtolower(trim($singular));

        return $map[$locale][$key] ?? $singular;
    }
}
