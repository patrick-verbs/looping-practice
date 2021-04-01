# Looping practice

## Tests
### Passing
#### Description toRoman()
Test: Convert 1 to the string "I"
Code: toRoman(1)
Expected Output: "I"

### Failing
#### Description toRoman()


## Roman numerals
#### My old FileMaker Pro function
Case(
Get( ActiveFieldContents )>1000000;Get( ActiveFieldContents );

Get( ActiveFieldContents )=1000000;Char(77300077);

Choose(Right(Int(Get( ActiveFieldContents )/100000);1);"";Char(77300067);Char(77300067)&Char(77300067);Char(77300067)&Char(77300067)&Char(77300067);Char(77300067)&Char(77300076);Char(77300068);Char(77300068)&Char(77300067);Char(77300068)&Char(77300067)&Char(77300067);Char(77300068)&Char(77300067)&Char(77300067)&Char(77300067);Char(77300067)&Char(77300077))&
Choose(Right(Int(Get( ActiveFieldContents )/10000);1);"";Char(77300088);Char(77300088)&Char(77300088);Char(77300088)&Char(77300088)&Char(77300088);Char(77300088)&Char(77300076);Char(77300076);Char(77300076)&Char(77300088);Char(77300076)&Char(77300088)&Char(77300088);Char(77300076)&Char(77300088)&Char(77300088)&Char(77300088);Char(77300088)&Char(77300067))&
Choose(Right(Int(Get( ActiveFieldContents )/1000);1);

"";"M";"MM";"MMM";"M"&Char(77300086);Char(77300086);Char(77300086)&"M";Char(77300086)&"MM";Char(77300086)&"MMM";"M"&Char(77300088))&
Choose(Right(Int(Get( ActiveFieldContents )/100);1);

"";"C"; "CC";"CCC";"CD";"D";"DC";"DCC";"DCCC";"CM") &
Choose(Right(Int(Get( ActiveFieldContents )/10);1);

"";"X";"XX";"XXX";"XL";"L";"LX";"LXX";"LXXX";"XC") &
Choose(Mod(Get ( ActiveFieldContents ); 10);

"";"I";"II";"III";"IV";"V";"VI";"VII";"VIII";"IX")
)